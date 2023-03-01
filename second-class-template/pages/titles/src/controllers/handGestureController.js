export default class handGestureController{
    #view
    #service
    constructor({ view, service }){
        this.#service = service
        this.#view = view
    }

    async init() {
    }

    static async initialize(deps) {
        const controller = new handGestureView(deps)
        return controller.init()
    }
}