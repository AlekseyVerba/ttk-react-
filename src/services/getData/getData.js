export default class getData {
    _urlBase = "http://ttk.tw1.ru/?rest_route=/wp/v2"

    getResolve = async (url) => {
        const res = await fetch(`${this._urlBase}${url}`)
        if (!res.ok) {
            throw new Error("Неверный запрос")
        }
        const body = await res.json()
        return body
    
    }

    getButtonsMain = async () => {
        const res = await this.getResolve("/pages/2&_fields=acf.knopki_v_nachale_straniczy")
        return res.acf.knopki_v_nachale_straniczy
    }
    getServices = async () => {
        const res = await this.getResolve("/services/&_fields=description,id,link,name")
        return res
    }

    getRates = async () => {
        const res1 = await this.getResolve("/rates&_fields=name, id, slug")
        
        const res2 = await this.getResolve("/services&_fields=name, id")
        let res3 = await this.getResolve("/service&_fields=acf,id,rates,services,title&per_page=100")
        res3 = res3.map(item => {
            return {
                ...item,
                isAdd: false
            }
        })
        return {
            res1,
            res2, 
            res3
        }
    }
    getNewsFour = async () => {
        const res = await this.getResolve("/news&_fields=id,title,link,content,date&per_page=4")
        return res
    }

    getSales = async () => {
        const res = await this.getResolve("/sales&_fields=id,title,link,content,date,acf")
        return res
    }
    getSale = async (id) => {
        const res = await this.getResolve(`/sales/${id}&_fields=title,content`)
        return res
    }

    getCameras = async (page) => {
        const res = await this.getResolve(`/cameras&_fields=id,title,link&per_page=10&page=${page}`)
        return res
    }
    getCamera = async (id) => {
        const res = await this.getResolve(`/cameras/${id}&_fields=id,acf,title,content`)
        return res
    }

    getAllCamerasId = async () => {
        const res = await this.getResolve(`/cameras&_fields=id&per_page=100`)
        return res
    }

    getAllNewsId = async () => {
        const res = await this.getResolve(`/news&_fields=id&per_page=100`)
        return res
    }

    getNews = async (page) => {
        const res = await this.getResolve(`/news&_fields=id,content,title,link&per_page=10&page=${page}`)
        return res
    }

    getNew = async (id) => {
        const res = await this.getResolve(`/news/${id}&_fields=id,acf,title,content`)
        return res
    }
    getNewThree = async () => {
        const res = await this.getResolve(`/news/&_fields=id,acf,title,content&per_page=3`)
        return res
    }
    // sales

    getGuide = async () => {
        const res = await this.getResolve(`/guide/&_fields=id,title,content`)
        return res
    }

    getGuideItem = async (id) => {
        const res = await this.getResolve(`/guide/${id}&_fields=id,title,content, acf`)
        return res
    }

    getGuidePage = async () => {
        const res = await this.getResolve(`/pages/22&_fields=acf.vopros-otvet`)
        return res
    }

    getAboutCompany = async () => {
        const res = await this.getResolve(`/pages/9&_fields=acf`)
        return res
    }

    getContacts = async () => {
        const res = await this.getResolve(`/pages/2&_fields=acf.nomer_telefona,
                                                            acf.pochtovyj_adress,
                                                            acf.podrobnyj_adres,
                                                            acf.ssylka_na_facebook,
                                                            acf.ssylka_na_instagram,
                                                            acf.ssylka_na_odnoclass,
                                                            acf.ssylka_na_vk,
                                                            acf.ssylka_na_youtube`)
        return res
    }
    getCoords = async () => {
        const res = await this.getResolve(`/pages/18&_fields=acf`)
        return res
    }


    getSliderMain = async () => {
        const res = await this.getResolve("/pages/2&_fields=acf.slide")
        return res.acf.slide
    }
}