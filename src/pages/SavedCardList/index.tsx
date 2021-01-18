import React from 'react';
import './account_card_info.less';
import { Card} from 'react-bootstrap';
import { CreditCard } from 'react-feather';
import {ActivityIndicator,Accordion} from 'antd-mobile';

const CardList: React.FC<{}> = () => {
    const [cardData, setCardData] = React.useState([]);
    const [isComplete, setIsComplete] = React.useState(true);

    React.useEffect(() => {
        getCards();
    }, [])

    const getCards = async() => {
        fetch('/api/cards/').then(function (res) {
            res.json().then(function (result) {
                setCardData(result);
            })
        })
        setIsComplete(false);
    }

    const onDelete=async(it:number)=>{

    }

    return (
        <div className="accountSettingComponent">
            <div className="container">
               
                {cardData.length != 0 && <Accordion defaultActiveKey="0" className="savedCard-accordion-Stripe">
                  <Accordion.Panel header="Stripe" className="pad">
                      {
                         cardData.map((item: any, key) => {
                            return <Card key={key} style={{ width: '300px', color: 'black' }} className="Card_align">
                            <Card.Body style={{padding:'10px'}}>
                                <div className="Card_flex">
                                    <div className="card_flex_icon">
                                        <CreditCard size="30" />
                                    </div>
                                    <div className="credit_card_number">
                                        <h6>** ** ** ** {item.cardLastFourDigits}</h6>
                                    </div>
                                    <div>
                                        <button className="btn btn-danger" type="submit" onClick={()=>{onDelete(item.paymentMethod)}}>Delete</button>
                                    </div>
                                </div>
                            </Card.Body>
                            </Card>
                        })
                      }
                  </Accordion.Panel>
                </Accordion>
                }
            </div>
            <div className="toast-example">
                  <ActivityIndicator
                    toast
                    text="Loading..."
                    animating={isComplete}
                  />
            </div>
        </div>
    )
}

export default CardList;