export default class Controller{
    #view
    #service
    #worker
    constructor({ view, service, worker}){
        this.#view = view
        this.#service = service
        this.#worker = this.#configureWorker(worker)

        this.#view.configureOnBtnClick(this.onBtnStar.bind(this))
    }
    static async initialize(deps) {
        const controller = new Controller(deps)
        controller.log('not yet detecting eye blink? click in the button to start')
        return controller.init()
    }
    #configureWorker(worker){
        worker.onmessage = (msg) => {
            console.log("configureworker true", msg)
            if('ready' === msg.data || 'READY' === msg.data){
                console.log("If Button true", msg)
                this.#view.enableButton()
                return;
            }
        }
        return worker
    }
    async init(){
        console.log("init")
    }
    log(text){
        this.#view.log(`logger: ${text}`)
    }
    onBtnStar(){
        this.log('initialize detection...')
    }
}