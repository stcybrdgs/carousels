const fs = require('fs')

const imageDir = './public/images'

// Read the contents of the directory
fs.readdir(imageDir, (err, files) => {
  if (err) {
    console.error('Error reading directory:', err)
    return
  }

  // Log the list of file names
  console.log('Files in the directory:')
  files.forEach((file) => {
    console.log(file)
  })
})

