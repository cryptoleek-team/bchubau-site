import React,{useState,useEffect} from 'react';
import {
    EventContainer,
    TextWrapper,
    Heading,
    CardContainer,
    CardImg,
    CardTitle,
    CardDesc,
    CardBox,
    Icon,
    IconContainer
} from './EventElements';
import {getEventsData} from '../../api/index';
import {IoLocationOutline, IoPersonOutline} from 'react-icons/io5';
import {FaRegCalendarCheck} from 'react-icons/fa';
import {AiOutlineClockCircle} from 'react-icons/ai';
import {Button} from "../ButtonElements"
import LoadingCard from "../Loading";

const EventSection =({id,c})=>{
    const [events,setEvents] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(()=>{
        const getEventsList = async()=>{
            const response = await getEventsData();
            setEvents(response);
            setIsLoading(false);
        };
        getEventsList();
    },[])

    const newPage = (url) => {
        const w=window.open('about:blank');
        w.location.href= url;
    }

    if(isLoading){
        return(
            <EventContainer>
                <Heading>{c.eventTitle}</Heading>
                <LoadingCard></LoadingCard>
            </EventContainer>
        )
    }else{
        return (
            <EventContainer id={id}>
                <TextWrapper>
                    <Heading>{c.eventTitle}</Heading>
                    {events?
                        events.map((item,index)=>(
                        <CardContainer key={index}>
                            <CardBox>
                                <CardImg src={item.img} alt="img"></CardImg>
                                <div>
                                    <CardTitle>{item.name}</CardTitle>
                                    <IconContainer>
                                        <Icon>
                                            <FaRegCalendarCheck/>
                                        </Icon>
                                        <CardDesc>{item.start}</CardDesc>
                                    </IconContainer>

                                    <IconContainer>
                                        <Icon>
                                            <AiOutlineClockCircle/>
                                        </Icon>
                                        <CardDesc>{item.duration}</CardDesc>
                                    </IconContainer>

                                    <IconContainer>
                                        <Icon>
                                            <IoLocationOutline/>
                                        </Icon>
                                        <CardDesc>{item.location}</CardDesc>
                                    </IconContainer>

                                    <IconContainer>
                                        <Icon>
                                            <IoPersonOutline/>
                                        </Icon>
                                        <CardDesc>{item.capacity} Persons Capacity</CardDesc>
                                    </IconContainer>
                                    <div>
                                        <Button onClick={()=>newPage(item.url)}>Register</Button>
                                    </div>
                                </div> 
                            </CardBox>
                        </CardContainer>
                        )): ""
                    }
                </TextWrapper>
            </EventContainer>
        )
    }
}
export default EventSection

