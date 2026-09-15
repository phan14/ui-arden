param(
    [Parameter(Mandatory = $true)][string]$ThemeSource,
    [Parameter(Mandatory = $true)][string]$OutputZip
)

$ErrorActionPreference = 'Stop'
$source = (Resolve-Path -LiteralPath $ThemeSource).Path
$output = [System.IO.Path]::GetFullPath($OutputZip)

if ((Split-Path -Leaf $source) -ne 'flatsome-child') {
    throw 'Expected a flatsome-child source directory.'
}

if ((Split-Path -Leaf $output) -ne 'arden-child-2.0.1-task09_8b_r-staging.zip') {
    throw 'Refusing an unexpected artifact name.'
}

$files = @(Get-ChildItem -LiteralPath $source -Recurse -File | Sort-Object FullName)
if ($files.Count -eq 0) {
    throw 'Theme source contains no files.'
}

$outputParent = Split-Path -Parent $output
if (-not (Test-Path -LiteralPath $outputParent)) {
    New-Item -ItemType Directory -Path $outputParent | Out-Null
}
if (Test-Path -LiteralPath $output) {
    Remove-Item -LiteralPath $output -Force
}

Add-Type -AssemblyName System.IO.Compression
$stream = [System.IO.File]::Open($output, [System.IO.FileMode]::CreateNew)
$archive = [System.IO.Compression.ZipArchive]::new($stream, [System.IO.Compression.ZipArchiveMode]::Create, $false)
$directoryTimestamp = [System.DateTimeOffset]::new(2026, 8, 28, 0, 0, 0, [System.TimeSpan]::Zero)

try {
    $directories = [System.Collections.Generic.HashSet[string]]::new([System.StringComparer]::Ordinal)
    [void]$directories.Add('flatsome-child/')
    foreach ($file in $files) {
        $relative = $file.FullName.Substring($source.Length + 1).Replace('\', '/')
        $parts = $relative.Split('/')
        $directory = 'flatsome-child/'
        for ($index = 0; $index -lt ($parts.Length - 1); $index++) {
            $directory += $parts[$index] + '/'
            [void]$directories.Add($directory)
        }
    }

    foreach ($directory in @($directories | Sort-Object)) {
        $entry = $archive.CreateEntry($directory, [System.IO.Compression.CompressionLevel]::NoCompression)
        $entry.ExternalAttributes = 1106051088 # 040755 << 16, plus DOS directory flag.
        $entry.LastWriteTime = $directoryTimestamp
    }

    foreach ($file in $files) {
        $relative = $file.FullName.Substring($source.Length + 1).Replace('\', '/')
        $entry = $archive.CreateEntry('flatsome-child/' + $relative, [System.IO.Compression.CompressionLevel]::Optimal)
        $entry.ExternalAttributes = -2119958528 # 0100644 << 16 as signed Int32.
        $entry.LastWriteTime = $file.LastWriteTime
        $input = [System.IO.File]::OpenRead($file.FullName)
        $destination = $entry.Open()
        try {
            $input.CopyTo($destination)
        }
        finally {
            $destination.Dispose()
            $input.Dispose()
        }
    }
}
finally {
    $archive.Dispose()
    $stream.Dispose()
}

Write-Output ('PACKAGED_FILES=' + $files.Count)
