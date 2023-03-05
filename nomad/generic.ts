type Player<E> = {
    name: string;
    extraInfo: E;
};

type Info = {
    address: string;
    te?: string;
};

const y: Player<Info> = {
    name: "ysh",
    extraInfo: {
        address: "bucheon",
        te: "aa",
    },
};

const x: Player<null> = {
    name: "ysh",
    extraInfo: null,
};

console.log({ y, x });
