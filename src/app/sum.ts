export function fetchPromise(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('peanut butter')
        }, 1000)
    })
}