import Column from '../utility/Column';
import Row from '../utility/Row';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import Button from '../utility/Button';
import Heading from '../utility/Heading';
import { useState } from 'react'; 
import Calendar from 'react-calendar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar } from '@fortawesome/free-solid-svg-icons';
import FixedOverlayHandleClick from '../utility/FixedOverlayHandleClick';
import 'react-calendar/dist/Calendar.css';
import { DateTime } from 'luxon';

const ResourceLibraryForm = () => {

  const { handleSubmit, register, setValue } = useForm();

  const onSubmit = (data) => {
    console.log(data)
  }

  const d = 'Thu Nov 11 2021 00:00:00 GMT-0800'; 

  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [showCalendar, setShowCalendar] = useState(false); 
  const [showEndCalendar, setShowEndCalendar] = useState(false); 

  const closeHandler = () => {
    setShowCalendar(false); 
    setShowEndCalendar(false);
  }

  return (
    <>
      <Column width="45%">
        <ContainerWithBorder>
          <Heading text='Filter By:' size={28} mb='0'/>

          <ButtonContainer>
            <Button 
              text='APPLY' 
              noMarginTop 
              style={{marginRight: 10, marginBottom: 10}}
              type='submit'
              id='resource-form'
              onClick={() => handleSubmit(onSubmit)()}
              // https://github.com/react-hook-form/react-hook-form/issues/2321
              // submit button outside of form
            />
            <Button text='CLEAR' noMarginTop style={{marginBottom: 10}} bgColor='#003354'/>
          </ButtonContainer>
        </ContainerWithBorder>

        <Form id='resource-form' onSubmit={handleSubmit(onSubmit)}>
          <CategoryBoxTitle style={{marginTop: 40}}> KEYWORD SEARCH </CategoryBoxTitle>
          <Input 
            id='keyword'
            name='keyword'
            {...register('keyword')}
            placeholder='Enter Search Term...'
          />

          <CategoryBoxTitle> DATE RANGE </CategoryBoxTitle>

          {/******** CALENDARS *********/}
          <Row align='center' style={{position: 'relative'}}>
            <Input 
              placeholder='From:'
              name='startDate'
              {...register('startDate')}
            />
            <div
              onClick={() => setShowCalendar(true)}
            >
              <FontAwesomeIcon 
                icon={faCalendar} 
                size='2x' 
                color='grey' 
                style={{marginLeft: 20}}
                className='hover-pointer'
              />
            </div>
            {showCalendar && (
              <CalendarContainer>
                <Calendar 
                  onChange={(event) => {
                    setStartDate(event); 
                    const d = DateTime.fromJSDate(event)
                    setValue('startDate', d.toLocaleString(DateTime.DATE_MED))                    
                  }}
                  value={startDate}
                />
                <Button 
                  text='APPLY' 
                  style={{marginTop: 0, minWidth: '100%'}} 
                  onClick={() => {
                    setShowCalendar(false)
                  }}
                /> 
              </CalendarContainer>
            )}
          </Row>

          <Row align='center' style={{position: 'relative'}}>
            <Input 
              placeholder='To:'
              name='endDate'
              {...register('endDate')}
            />
            <div
              onClick={() => setShowEndCalendar(true)}
              style={{display: 'relative'}}
            >
              <FontAwesomeIcon 
                icon={faCalendar} 
                size='2x' 
                color='grey' 
                style={{marginLeft: 20}}
                className='hover-pointer'
              />
            </div>
            
            {showEndCalendar && (
              <CalendarContainer>
                <Calendar 
                  onChange={(event) => {
                    console.log('end date')
                    setEndDate(event); 
                    const d = DateTime.fromJSDate(event)
                    setValue('endDate', d.toLocaleString(DateTime.DATE_MED))
                  }}
                  value={endDate}
                />
                <Button 
                  text='APPLY' 
                  style={{marginTop: 0, minWidth: '100%'}} 
                  onClick={() => {
                    setShowEndCalendar(false)
                  }}
                /> 
              </CalendarContainer>
            )}
          </Row>

          <CategoryBoxTitle> DOCUMENT TYPE </CategoryBoxTitle>
          <Column>
            <Row align='center'>
              <input 
                className='hover-pointer'
                type='checkbox'
                id='comments'
                {...register('comments')}
                />
                <Label className='hover-pointer' htmlFor='comments'> Comments </Label>
            </Row>
            <Row align='center'>
              <input 
                className='hover-pointer'
                type='checkbox'
                id='letters'
                {...register('letters')}
                />
                <Label className='hover-pointer' htmlFor='letters'> Letters </Label>
            </Row>
            <Row align='center'>
              <input 
                className='hover-pointer'
                type='checkbox'
                id='reports'
                {...register('reports')}
                />
                <Label className='hover-pointer' htmlFor='reports'> Reports </Label>
            </Row>
          </Column>

          <CategoryBoxTitle> TOPIC </CategoryBoxTitle>
        </Form>
      </Column>

      {(showCalendar || showEndCalendar) && (
        <FixedOverlayHandleClick closeHandler={closeHandler}/>
      )}
    </>
  )
}

export default ResourceLibraryForm; 

const Form = styled.form`
  display: flex; 
  flex-direction: column;
  width: 100%; 
`

const CategoryBoxTitle = styled.div`
	width: 100%; 
	background-color: #546fa8; 
	padding: 5px 10px; 
	color: white; 
  font-weight: bold;
  margin: 15px 0;

  &:first-child {
    margin-top: 40px;
  }
`

const Input = styled.input`
  width: 80%; 
  border-radius: 20px;
  margin: 15px 0;
  min-height: 30px;
  border: 1px solid rgba(0, 0, 0, .2); 
  padding: 5px 5px 5px 30px;
  font-size: 16px;
  color: #222;
`

const ButtonContainer = styled.div`
	display: flex; 
	margin-left: auto; 
`

const ContainerWithBorder = styled.div`
	width: 100%;
	border-bottom: 1px solid rgba(0, 0, 0, .4);
	display: flex; 
	align-items: flex-start;
	height: 50px;
	align-items: center;
`

const Label = styled.label`
  margin-left: 20px; 
  font-family: Roboto, sans-serif; 
`

const CheckboxInput = styled.input`

`

const CalendarContainer = styled.div`
  position: absolute; 
  top: 0px; 
  right: 0px; 
  display: flex;
  flex-direction: column;
  z-index: 10;
`