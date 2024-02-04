import style from '../../styles/win98/window.module.scss';
import { Rnd } from 'react-rnd';


function WindowFrame({title, id, content, toggleWindow, exitWindow, hidePath}) {
    console.log("hidden is " + id.minimized )
    return (
        <Rnd
            default={{
                x: 85,
                y: 50,
                width: "80%"
            }}
            //width={"80%"}
            // minWidth={"200px"}
            // maxHeight={"55%"}
            // bounds={"body"}
            cancel={".window-body"}
            >
            <div className={`window ${id.minimized ? style.hidden : ""}`} style={{}}>
                <div className={`title-bar ${style.windowUI}`}>
                    <div className="title-bar-text">{title}</div>
                    <div className="title-bar-controls">
                        <button aria-label="Minimize" onTouchStart={toggleWindow} onClick={toggleWindow} style={{cursor : 'pointer'}}></button>
                        <button aria-label="Maximize" style={{cursor : 'pointer'}}></button>
                        <button aria-label="Close" onTouchStart={exitWindow} onClick={exitWindow} style={{cursor : 'pointer'}}></button>
                    </div> 
                </div>
                <section className={`${style.address_bar} ${hidePath ? style.hidden : ""}`}>
                    <div className={style.div_bar}></div>
                    <div className={style.address_bar_title}>A<u>d</u>dress</div>
                    <div className={style.address_bar_content}>
                        <div className={style.address_bar_content_text}>
                            
                                <span>{id.mockPath}</span>
                           
                        </div>
                    </div>
                </section>
                <div className="window-body">
                    <section className={style.windowContent}>
                            <div className={style.windowContentInner}>
                                 <div>
                                     {content}
                                 </div>
                            </div>
                    </section>
                    {/* <div style={{width: "500px"}}>hieght</div> */}
                </div>
                <div className="status-bar">
                    <p className="status-bar-field">Done</p>
                    <p className="status-bar-field"></p>
                    {/* <p className="status-bar-field">Slide 1</p>
                    <p className="status-bar-field">CPU Usage: 14%</p> */}
                </div>
            </div> 
        </Rnd>
    );
}

export default WindowFrame;