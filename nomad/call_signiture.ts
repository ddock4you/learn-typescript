type Config = {
    path: string;
    state: object;
};

type Push = {
    (path: string): void;
    (config: Config): void;
};

const push: Push = (config: string | Config) => {
    if (typeof config === "string") {
        console.log(config);
    } else {
        console.log(config.path, config.state);
    }
};

push("aaabbbccc");
