const mixinProps = {
    props: {
        size: {
            type: String,
            default() {
                return 'default';
            }
        },
        theme: {
            type: String,
            default() {
                return 'default';
            }
        },
        disabled: {
            type: Boolean,
            default() {
                return false;
            }
        }
    }
}

export {
    mixinProps
}