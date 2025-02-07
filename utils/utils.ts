export const scrollToUrlShortner = () => {
    window.scrollTo({ top: 500, behavior: "smooth" })
}

export const isValidUrl = (url: string) => {
    try {
        const newUrl = new URL(url);
        return newUrl.protocol === "http:" || newUrl.protocol === "https:";
    } catch (error) {
        console.error(error)
        return false
    }
}

export const shortenUrl = async (url: string) => {
    try {
        const response = await fetch(
            'https://url-shortener-service.p.rapidapi.com/shorten',
            {
                method: "POST",
                headers: {
                    'x-rapidapi-key': "c38818db63mshe088d2f4dcfcf17p1a86dbjsnb0632a7d758e",
                    'x-rapidapi-host': "url-shortener-service.p.rapidapi.com",
                    'Content-Type': "application/json"

                },
                body: JSON.stringify({ url })
            }
        )
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
        throw error;
    }
}