const axios = require('axios')

// Função para buscar os downloads de um pacote
async function getNpmDownloads(packageName, period) {
  let url = ''

  switch (period) {
    case 'day':
      url = `https://api.npmjs.org/downloads/point/last-day/${packageName}`
      break
    case 'week':
      url = `https://api.npmjs.org/downloads/point/last-week/${packageName}`
      break
    case 'month':
      url = `https://api.npmjs.org/downloads/point/last-month/${packageName}`
      break
    default:
      throw new Error('Período inválido. Use "day", "week" ou "month".')
  }

  try {
    const response = await axios.get(url)
    const data = response.data
    return data.downloads
  } catch (error) {
    console.error(
      `Erro ao buscar os downloads para o pacote ${packageName}:`,
      error.message,
    )
    return 0
  }
}

// Função para somar downloads de dois pacotes
async function getCombinedWeeklyDownloads(package1, package2) {
  const downloadsPackage1 = await getNpmDownloads(package1, 'week')
  const downloadsPackage2 = await getNpmDownloads(package2, 'week')

  const totalDownloads = downloadsPackage1 + downloadsPackage2
  console.log(`${totalDownloads}`)
}

// Executa a função para dois pacotes específicos
const packageName1 = '@houstonicons/pro' // Substitua pelo nome do primeiro pacote
const packageName2 = '@houstonicons/react' // Substitua pelo nome do segundo pacote

getCombinedWeeklyDownloads(packageName1, packageName2)
