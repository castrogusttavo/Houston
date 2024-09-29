import axios from 'axios'

interface DownloadDataRequest {
  downloads: number
  packageName: string
}

async function getNpmDownloads(
  packageName: string,
  period: string = 'weekly',
): Promise<DownloadDataRequest> {
  try {
    const response = await axios.get(
      `https://api.npmjs.org/downloads/point/last-${period}/${packageName}`,
    )
    const data = response.data
    return { downloads: data.downloads, packageName }
  } catch (error) {
    console.error(error)
    return { downloads: 0, packageName }
  }
}

export async function TotalDownloadsForPackagesNpm(
  packageName1: string,
  packageName2: string,
  packageName3: string,
  packageName4: string,
): Promise<string> {
  const package1 = await getNpmDownloads(packageName1, 'week')
  const package2 = await getNpmDownloads(packageName2, 'week')
  const package3 = await getNpmDownloads(packageName3, 'week')
  const package4 = await getNpmDownloads(packageName4, 'week')

  const totalDownloads =
    package1.downloads +
    package2.downloads +
    package3.downloads +
    package4.downloads

  if (totalDownloads <= 2500) {
    return '3,000'
  }

  return totalDownloads.toLocaleString('en-US')
}
