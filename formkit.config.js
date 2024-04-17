import { generateClasses } from "@formkit/themes"

const config = {
    config: {
        classes: generateClasses({
            global: {
                label: 'block mb-1 font-bold text-lg',
                message: 'text-red-500 mb-5',
                wrapper: 'space-y-2 mb-3'
            },
            text: {

            },
            file:{

            },
            select:{

            },
            number: {

            }
        })
    }
}

export default config