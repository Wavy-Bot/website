import useSWR from "swr";

const fetcher = async (url: string) => {
    const res = await fetch(url);

    if (!res.ok) {
        class FetchError extends Error {
            status: number | undefined;
            info: string | undefined;
            loggedIn: boolean | undefined;
        }

        const error = new FetchError('An error occurred while fetching the data. Please try again later.');

        // Attach extra info to the error object.
        error.status = res.status;

        const info = await res.json();

        error.info = info;
        error.loggedIn = info.loggedIn;
        throw error;
    }

    return res.json();
};

function FetchContributors() {
    const { data, error } = useSWR("https://api.github.com/repos/wavy-bot/bot/contributors", fetcher);

    return {
        data: data,
        isLoading: !error && !data,
        isError: error
    }
}

export { FetchContributors };