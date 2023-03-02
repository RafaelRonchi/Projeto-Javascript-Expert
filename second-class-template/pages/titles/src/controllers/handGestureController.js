export default class HandGestureController{
    #view
    #service
    #camera
    constructor({ view, service, camera }){
        this.#service = service
        this.#view = view
        this.#camera = camera
    }

    async init() {
        return this.#loop()
    }

    async estimateHands() {
        try{
            const hands = await this.#service.esmimateHands(this.#camera.video)
            console.log({ hands })
        } catch (error) {
            console.error('error', error)
        }
    }

    async #loop(){
        await this.#service.initializeDetector() 
        await this.estimateHands()
    }

    static async initialize(deps) {
        const controller = new HandGestureController(deps)
        return controller.init()
    }
}