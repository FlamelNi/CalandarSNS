

export function ensureError(err: any): Error {
    if (err instanceof Error) {
        return err;
    }

    return new Error(`Unknown Error: ${JSON.stringify(err)}`, { cause: err });
}

