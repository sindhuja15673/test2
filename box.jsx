import img1 from './images/saree.jpg';
import img2 from './images/kurti.jpg';
import img3 from './images/skirt.jpg';
import img4 from './images/gown.jpg';
import img5 from './images/gown2.webp';


function Box(){
    return(
        <div className="box">
            <div className="box1">
            <div className='sar'><img src={img1} alt="" /></div>
            <center><div className='font'>Saree</div></center><br />
            <center><div className='cost'>Rs.1990</div></center>
            </div>
            <div className="box2">
                <div className='kurti'><img src={img2} alt="" /></div>
                <center><div className='font'>Kurti</div></center><br />
                <center><div className='cost'>Rs.2999</div></center>
            </div>
            <div className="box3">
                <div className='skirt'><img src={img3} alt="" /></div>
                <center><div className='font'>Skirt</div></center><br />
                <center><div className='cost'>Rs.1599</div></center>
            </div>
            <div className="box4">
                <div className='gown'><img src={img5} alt="" /></div>
                <center><div className='font'>Gown</div></center><br />
                <center><div className='cost'>Rs.2599</div></center>
            </div>
        </div>
    )
}
export default Box