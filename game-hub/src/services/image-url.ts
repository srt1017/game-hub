const getCroppedImageUrl = (url: string) => {
    const target = 'media/'
    const index = url.indexOf(target) + target.length
    return url.slice(0, index) + 'crop/1000/800' + url.slice(index)
}

export default getCroppedImageUrl;