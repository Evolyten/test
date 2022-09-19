import React, { useState, useEffect } from "react";
import { Button } from "components/Button/Button";
import { requestPhoto } from "components/service/APIService";
import { Loader } from "components/Loader/Loader";
import { Modal } from "components/Modal/Modal";
import { ImageGalleryItem}  from "components/ImageGalleryItem/ImageGalleryItem";
import css from './ImageGalery.module.css'

const listStatus = {
    idle: "IDLE",
    pending: "PENDING",
    resolved: "RESOLVED",
    reject:"REJECT"
}

export function ImageGaller({userPick}) {
    const [img, setImg] = useState([])
    const [page, setPage] = useState(1)
    const [modal, setModal] = useState(false)
    const [status, setStatus] = useState(listStatus.idle)
    
    
    
    
       


    // useEffect(() => {
    //     const pushDataToState = async (page, name = userPick,) => {
    //         setStatus(listStatus.pending)
    //         setTimeout(async () => {
    //             const data = await requestPhoto(page, name)
    //             if (data.length === 0) {
    //                 alert('No matches for this query')
    //                 setStatus(listStatus.reject)

    //             }
    //             else {
    //                 setImg(prevState => [...prevState, ...data])
    //                 setStatus(listStatus.resolved)
    //             }
         
    //         }, 1000)
    //     }

    //         if (userPick !== '') {
    //             setImg([])
    //             setPage(1)
    //             console.log("pick");
    //             pushDataToState(1, userPick)
    //         }
        
    // }, [userPick])
    

    useEffect(() => {
        if (userPick === '') {
            return
        }
        const pushDataToState = async (page, name = userPick,) => {
            setStatus(listStatus.pending)
            setTimeout(async () => {
                const data = await requestPhoto(page, name)
                if (data.length === 0) {
                    alert('No matches for this query')
                    setStatus(listStatus.reject)

                }
                else {
                    setImg(prevState => [...prevState, ...data])
                    setStatus(listStatus.resolved)
                }
         
            }, 1000)
        }
        
            console.log('page');
            pushDataToState( page)
        
        
    }, [page,userPick])
    
    useEffect(() => {
        setImg([])
        setPage(1)
    },[userPick])
    useEffect(() => {

        function listener(e) {
       
            if (e.code === 'Escape') {
                closeModal()
            }} 
        if (modal) {
        window.addEventListener('keydown',(e)=>listener(e))
            
        }
        if (!modal) {
        return document.removeEventListener('keydown', (e)=>listener(e))
            
        }
    },[modal])
    
 
    const takeMorePage = () => {
        setPage(prevState => {
            console.log(prevState);
           return prevState + 1
        })
        
    }

    const closeModal = () => {
        setModal(false)
    }

    const userClick = (id) => {
        const k = img.find(n => n.id === id)
        setModal(k)
    }

    return(<>
            <ul className={css.img_list}>
                {img.map(n => <ImageGalleryItem key={n.id} src={n.webformatURL} keys={n.id} userPick={userClick}  /> )}
                
            </ul>
            {status===listStatus.pending&&<Loader/>}
            {status ===listStatus.resolved&&<Button incremetPage = {takeMorePage} />}
            {modal && <Modal currentImg={modal} closeModal={closeModal} />}
            </>)
}


// export class ImageGaller extends Component {
//     state = {
//         img: [],
//         page: 1,
//         modal: false,
//         status:listStatus.idle
//     }

//     pushDataToState = async (name, page) => {
//         this.setState({status:listStatus.pending})
//         setTimeout(async () => {
//             const data = await requestPhoto(name, page)
//             if (data.length === 0) {
//                 alert('No matches for this query')
//                 this.setState({status:listStatus.reject})  

//             } else {
//                 this.setState(prevState => ({ img: [...prevState.img, ...data] }))
//                 this.setState({status:listStatus.resolved})  
//             }
         
//         },1000)
       
        
//     }
    

//     componentDidUpdate(prevProps, prevState) {
//         const prevName = prevProps.userPick
//         const nextName = this.props.userPick
//         const prevPage = prevState.page
//         const nextPage = this.state.page
//         const nextModal = this.state.modal
//         if (prevName !== nextName) {
//             this.setState({ img: [], page: 1 })
//             this.pushDataToState(nextName, 1)
//         }
//         if (prevPage !== nextPage&& prevPage<nextPage) {
//             this.pushDataToState(nextName, nextPage)
            
//         } if (nextModal) {
//             window.addEventListener('keydown', this.addKeyListener)
//         } if (!nextModal) {
//             window.removeEventListener('keydown', this.addKeyListener)
//         }
        
   
//     }

//      takeMorePage = async() => {
//         this.setState(prevState => ({
//              page: prevState.page+1
//          }))
//     }

//     userClick = (id) => {
//         const k = this.state.img.find(n => n.id === id)
//         this.setState({modal:k})
//     }

//     closeModal = () => {
//         this.setState({modal:false})
//     }

//    addKeyListener=(e)=>{
//             if (e.code === 'Escape') {
//                 this.closeModal()
//             }}
    

//     render() {
//         return (<>
//             <ul className={css.img_list}>
//                 {this.state.img.map(n => <ImageGalleryItem key={n.id} src={n.webformatURL} keys={n.id} userPick={this.userClick} /> )}
                
//             </ul>
//             {this.state.status===listStatus.pending&&<Loader/>}
//             {this.state.status ===listStatus.resolved&&<Button incremetPage = {this.takeMorePage} />}
//             {this.state.modal && <Modal currentImg={this.state.modal} closeModal={this.closeModal} keyListener={this.addKeyListener} />}
//             </>)
        
//     }
    
// }

