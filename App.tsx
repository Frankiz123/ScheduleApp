// import React, {useState} from 'react';
// import {
//   View,
//   Text,
//   StyleSheet,
//   ScrollView,
//   TouchableOpacity,
//   SafeAreaView,
// } from 'react-native';
// import {
//   CalendarProvider,
//   ExpandableCalendar,
//   TimelineList,
//   CalendarUtils,
//   Timeline,
//   TimelineProps,
// } from 'react-native-calendars';
// import {Event} from 'react-native-calendars/src/timeline/EventBlock';

// const App = () => {
//   const [isCalendarExpanded, setIsCalendarExpanded] = useState(false);
//   const [selectedDate, setSelectedDate] = useState('2024-06-26');

//   const EVENT_COLOR = '#FFFFFF'; // Corrected color code
//   const today = new Date();
//   const getDate = (offset = 0) =>
//     CalendarUtils.getCalendarDateString(
//       new Date(today.setDate(today.getDate() + offset)),
//     );

//   console.log('getDate :: ', getDate());

//   const timelineData = [
//     {
//       start: `${getDate()} 09:10:00`,
//       end: `${getDate()} 12:00:00`,
//       title: 'Marcus Jones',
//       summary: '10Am - 11Am',
//       price: '$20.00',
//       status: 'completed',
//       color: EVENT_COLOR,
//     },
//     {
//       start: `${getDate()} 13:15:00`, // Corrected time format
//       end: `${getDate()} 14:30:00`,
//       title: 'Marcus Jones6',
//       summary: '11Am - 12Pm',
//       price: '$27.00',
//       status: 'Recurring',
//       color: EVENT_COLOR,
//     },
//     {
//       start: `${getDate()} 13:30:00`, // Corrected time format
//       end: `${getDate()} 14:30:00`,
//       title: 'Marcus Jones',
//       summary: '1Pm - 6Pm',
//       price: '$90.00',
//       status: 'completed',
//       color: EVENT_COLOR,
//     },
//     {
//       start: `${getDate()} 13:30:00`,
//       end: `${getDate()} 13:45:00`,
//       title: 'Marcus Jones',
//       summary: '10Am - 11Am',
//       price: '$20.00',
//       status: 'completed',
//       color: EVENT_COLOR,
//     },
//     {
//       start: `${getDate()} 14:40:00`, // Corrected time format
//       end: `${getDate()} 15:10:00`,
//       title: 'Marcus Jones',
//       summary: '10Am - 11Am',
//       price: '$20.00',
//       status: 'completed',
//       color: EVENT_COLOR,
//     },
//     {
//       start: `${getDate()} 14:50:00`, // Corrected time format
//       end: `${getDate()} 15:20:00`,
//       title: 'Marcus Jones',
//       summary: '10Am - 11Am',
//       price: '$20.00',
//       status: 'completed',
//       color: EVENT_COLOR,
//     },
//     {
//       start: `${getDate()} 16:30:00`,
//       end: `${getDate()} 17:30:00`,
//       title: 'Marcus Jones',
//       summary: '10Am - 11Am',
//       price: '$20.00',
//       status: 'completed',
//       color: EVENT_COLOR,
//     },
//     {
//       start: `${getDate()} 00:30:00`,
//       end: `${getDate()} 01:30:00`,
//       title: 'Marcus Jones',
//       summary: '10Am - 11Am',
//       price: '$20.00',
//       status: 'canceled',
//       color: EVENT_COLOR,
//     },
//     {
//       start: `${getDate(1)} 02:30:00`,
//       end: `${getDate(1)} 03:20:00`,
//       title: 'Marcus Jones',
//       summary: '10Am - 11Am',
//       price: '$20.00',
//       status: 'completed',
//       color: EVENT_COLOR,
//     },
//     {
//       start: `${getDate(1)} 04:10:00`,
//       end: `${getDate(1)} 04:40:00`,
//       title: 'Marcus Jones',
//       summary: '10Am - 11Am',
//       price: '$20.00',
//       status: 'canceled',
//       color: EVENT_COLOR,
//     },
//     {
//       start: `${getDate(1)} 13:05:00`,
//       end: `${getDate(1)} 13:35:00`,
//       title: 'Marcus Jones',
//       summary: '10Am - 11Am',
//       price: '$20.00',
//       status: 'completed',
//       color: EVENT_COLOR,
//     },
//     {
//       start: `${getDate(1)} 14:30:00`,
//       end: `${getDate(1)} 16:30:00`,
//       title: 'Marcus Jones',
//       summary: '10Am - 11Am',
//       price: '$20.00',
//       status: 'completed',
//       color: EVENT_COLOR,
//     },
//     {
//       start: `${getDate(2)} 01:40:00`,
//       end: `${getDate(2)} 02:25:00`,
//       title: 'Marcus Jones',
//       summary: '10Am - 11Am',
//       price: '$20.00',
//       status: 'completed',
//       color: EVENT_COLOR,
//     },
//     {
//       start: `${getDate(2)} 04:10:00`,
//       end: `${getDate(2)} 04:40:00`,
//       title: 'Marcus Jones',
//       summary: '10Am - 11Am',
//       price: '$20.00',
//       status: 'completed',
//       color: EVENT_COLOR,
//     },
//     {
//       start: `${getDate(2)} 15:45:00`, // Corrected time format
//       end: `${getDate(2)} 16:10:00`,
//       title: 'Marcus Jones',
//       summary: '10Am - 11Am',
//       price: '$20.00',
//       status: 'completed',
//       color: EVENT_COLOR,
//     },
//     {
//       start: `${getDate(2)} 11:30:00`,
//       end: `${getDate(2)} 12:30:00`,
//       title: 'Marcus Jones',
//       summary: '10Am - 11Am',
//       price: '$20.00',
//       status: 'completed',
//       color: EVENT_COLOR,
//     },
//     {
//       start: `${getDate(4)} 12:10:00`,
//       end: `${getDate(4)} 13:45:00`,
//       title: 'Garry Chris',
//       summary: '7Pm - 8Pm',
//       price: '$23.00',
//       status: 'completed',
//       color: EVENT_COLOR,
//     },
//   ];

//   const customTheme = {
//     event: {
//       borderColor: '#FAFAFA',
//       borderWidth: 3,
//       borderRadius: 10,
//       backgroundColor: 'white',
//       padding: 10,
//       marginBottom: 5,
//       shadowColor: '#000',
//       shadowOffset: {width: 0, height: 2},
//       shadowOpacity: 0.25,
//       shadowRadius: 3.84,
//       elevation: 5,
//     },
//     eventTitle: {
//       fontSize: 16,
//       fontWeight: 'bold',
//     },
//     eventSummary: {
//       fontSize: 14,
//     },

//     contentStyle: {
//       backgroundColor: '#FAFAFF',
//     },
//     verticalLine: {
//       display: 'none', // Hide the vertical line
//     },
//   };

//   const timelineProps: TimelineProps = {
//     format24h: true,
//     onEventPress: (clickedEvent: Event) => console.log(clickedEvent),
//     timelineLeftInset: 70,
//     rightEdgeSpacing: 24,
//     overlapEventsSpacing: 2,
//     // start: 8,
//     // end: 20,
//     styles: customTheme,
//   };

//   const renderItem = (timelineProps, _info) => {
 
//     return (
//       <Timeline
//         {...timelineProps}
//         events={timelineData}
//         onBackgroundLongPress={event =>
//           console.log('on long back press', event)
//         }
//         // styles={{
//         //   verticalLine: {
//         //     display: 'none', // Hide the vertical line
//         //   },
//         // }}
//         renderEvent={event => {
//           return (
//             <TouchableOpacity
//               onPress={() => console.log('event :: ', event)}
//               style={styles.event}>
//               <View>
//                 <Text style={styles.eventTitle}>{event.title}</Text>
//                 <Text style={styles.eventSummary}>{event.summary}</Text>
//               </View>
//               <Text style={styles.eventSummary}>{event.price}</Text>
//             </TouchableOpacity>
//           );
//         }}
//       />
//     );
//   };

//   const toggleCalendar = () => {
//     setIsCalendarExpanded(!isCalendarExpanded);
//   };

//   const onDateChanged = (day) => {
//     console.log('date :: ', day);
//     setSelectedDate(day.dateString);
//   }

//   return (
//     <SafeAreaView style={styles.safeArea}>
//       <CalendarProvider date={selectedDate}>
//         <View style={styles.header}>
//           <TouchableOpacity onPress={toggleCalendar} style={styles.button}>
//             <Text style={styles.buttonText}>
//               {isCalendarExpanded ? 'Collapse Calendar' : 'Expand Calendar'}
//             </Text>
//           </TouchableOpacity>
//           <Text style={styles.monthText}>June 2024</Text>
//         </View>
//         <ExpandableCalendar
//           key={
//             isCalendarExpanded
//               ? ExpandableCalendar.positions.OPEN
//               : ExpandableCalendar.positions.CLOSED
//           }
//           horizontal={true}
//           hideKnob={true}
//           disablePan={true}
//           initialPosition={
//             isCalendarExpanded
//               ? ExpandableCalendar.positions.OPEN
//               : ExpandableCalendar.positions.CLOSED
//           }
//           onCalendarToggled={isOpen => setIsCalendarExpanded(isOpen)}
//           firstDay={1}
//           hideArrows={true}
//           allowShadow={false}
//           onDayPress={onDateChanged}
//         />
//         <Text style={styles.currentDate}>{getDate()}</Text>
//         <ScrollView style={styles.timelineContainer}>
//           <TimelineList
//             events={timelineData}
//             timelineProps={timelineProps}
//             showNowIndicator
//             renderItem={renderItem}
//           />
//         </ScrollView>
//       </CalendarProvider>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   safeArea: {
//     flex: 1,
//     backgroundColor: '#FAFAFF',
//   },
//   header: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     padding: 10,
//     backgroundColor: 'white',
//   },
//   button: {
//     padding: 10,
//     backgroundColor: '#007BFF',
//     borderRadius: 5,
//   },
//   buttonText: {
//     color: 'white',
//     fontWeight: 'bold',
//   },
//   monthText: {
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   timelineContainer: {
//     marginTop: 10,
//     flex: 1,
//   },
//   event: {
//     backgroundColor: 'white',
//     width: '100%',
//     overflow: 'hidden',
//     borderRadius: 5,
//     padding: 10,
//     marginBottom: 5,
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItem: 'center',
//     flex: 1,
//   },
//   eventTitle: {
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
//   eventSummary: {
//     fontSize: 14,
//   },
//   customEvent: {
//     borderColor: '#FAFAFA',
//     borderWidth: 1,
//     borderRadius: 10,
//     backgroundColor: '#fff',
//   },
// });

// export default App;

// Other Code for App -=====================================

// import React from 'react';
// import { View, Text, SafeAreaView } from 'react-native';
// import {TimelineCalendar, EventItem} from '@howljs/calendar-kit';

// const App = () => {
//   const exampleEvents: EventItem[] = [
//     {
//       id: '1',
//       title: 'Event 1',
//       start: '2024-07-01T09:00:05.313Z',
//       end: '2024-07-01T12:00:05.313Z',
//       color: '#A3C7D6',
//     },
//     {
//       id: '2',
//       title: 'Event 2',
//       start: '2024-07-02T11:00:01.313Z',
//       end: '2024-07-02T14:00:05.313Z',
//       color: '#B1AFFF',
//     },
//     {
//       id: '3',
//       title: 'Event 3',
//       start: '2024-07-03T11:00:01.313Z',
//       end: '2024-07-03T14:00:05.313Z',
//       color: '#B1AFFF',
//     },
//     {
//       id: '4',
//       title: 'Event 3',
//       start: '2024-06-26T11:00:01.313Z',
//       end: '2024-06-26T14:00:05.313Z',
//       color: '#B1AFFF',
//     },
//     {
//       id: '5',
//       title: 'Event 3',
//       start: '2024-07-02T11:00:01.313Z',
//       end: '2024-07-02T14:00:05.313Z',
//       color: '#B1AFFF',
//     },
//     {
//       id: '6',
//       title: 'Event 3',
//       start: '2024-07-02T11:00:01.313Z',
//       end: '2024-07-02T14:00:05.313Z',
//       color: '#B1AFFF',
//     },
//     {
//       id: '6',
//       title: 'Event 6',
//       start: '2024-07-02T11:00:01.313Z',
//       end: '2024-07-02T14:00:01.41Z',
//       color: '#B1AFFF',
//     },
//   ];

//   const onLongPressBackground = (event) => {
//     console.log('onLong press background ::; ',event);
//     timeFormate(event)
//   }

// const onPressBackground = (event) =>{
//   console.log('onPressBackground :: ', event)
//   timeFormate(event)
// }

// const timeFormate = (dateFormate)=>{
//   const utcDate = new Date(dateFormate);

// // Convert to local time
// const localDate = new Date(utcDate.toLocaleString());

// // Format to AM/PM
// const hours = localDate.getHours();
// const minutes = localDate.getMinutes();
// const ampm = hours >= 12 ? 'PM' : 'AM';
// const formattedHours = hours % 12 || 12; // Convert 0 to 12 for 12 AM
// const formattedMinutes = minutes < 10 ? '0' + minutes : minutes;

// const formattedTime = `${formattedHours}:${formattedMinutes} ${ampm}`;

// console.log(formattedTime); // Output: "4:33 PM" (example for a specific timezone)

// }

//   return (
//     <SafeAreaView style={{flex:1}}>
//       <TimelineCalendar
//         viewMode="threeDays"
//         events={exampleEvents}
//         onLongPressBackground={onLongPressBackground}
//         onPressBackground={onPressBackground}
//         isShowHalfLine={false}
//         // theme={{backgroundColor: '#A4AFC1'}}
//         theme={{ 
//           backgroundColor: '#FFFFFF',
//           calendarHeader: {
//             backgroundColor: '#FFDDC1', // Header background color
//             textColor: '#000000', // Header text color
//           },
//           calendarBody: {
//             backgroundColor: 'red', // Body background color
//           },
//           activeDateStyle: {
//             backgroundColor: '#27AE60', // Active date background color
//             color: '#FFFFFF', // Active date text color
//           },
//         }}
//       />
//       {/* <TimelineCalendar viewMode="threeDays" events={exampleEvents} halfLineContainerStyle={{backgroundColor:'red', display: 'none'}} /> */}
//     </SafeAreaView>
//   );
// };

// export default App;


// Other library react-native-week-view

// import React from 'react';
// import { View, SafeAreaView } from 'react-native';

// import WeekView from 'react-native-week-view';


// const App = () => {
//   const myEvents = [
//     {
//     id: 1,
//     description: 'Event',
//     startDate: new Date(2024, 6, 1, 15, 15),
//     endDate: new Date(2024, 6, 1, 15, 45),
//     color: 'blue',
//     },
//    ];

//    const onGridLongPress = (pressEvent: TouchEvent, startHour: number, date: Date)=>{
//     console.log('onGrid Long Press');
//     console.log('pressEvent : ',pressEvent)
//     console.log('startHour : ',startHour)
//     console.log('date : ',date)
//    };

//    const onGridClick = (pressEvent: TouchEvent, startHour: number, date: Date)=>{
//     console.log('onGrid  Press');
//     console.log('pressEvent : ',pressEvent)
//     console.log('startHour : ',startHour)
//     console.log('date : ',date)
//    }

//   return (
//     <SafeAreaView style={{flex:1, backgroundColor:'white'}}>
//        <WeekView
//         events={myEvents}
//         selectedDate={new Date(2024, 6, 1)}
//         numberOfDays={3}
//         onGridLongPress={onGridLongPress}
//         onGridClick={onGridClick}
//         />
//     </SafeAreaView>
//   )
// }

// export default App



// React native Calenders numberOfDays ==================

// import React, { useRef } from 'react';
// import { SafeAreaView, View, Text, ScrollView, StyleSheet, Dimensions, TouchableOpacity, Alert, NativeSyntheticEvent, NativeScrollEvent } from 'react-native';
// import moment from 'moment';

// interface Event {
//   start: string;
//   end: string;
//   title: string;
// }

// interface Events {
//   [date: string]: Event[];
// }

// const screenWidth = Dimensions.get('window').width;
// const timeSlots = Array.from({ length: 24 }, (_, i) => `${i}:00`);

// const App: React.FC = () => {
//   const today = moment();
//   const selectedDates = [
//     today.format('YYYY-MM-DD'),
//     today.add(1, 'day').format('YYYY-MM-DD'),
//     today.add(1, 'day').format('YYYY-MM-DD'),
//   ];

//   const dummyEvents: Events = {
//     '2024-07-01': [
//       { start: '09:00', end: '10:00', title: 'Event 1' },
//       { start: '12:00', end: '13:00', title: 'Event 2' },
//     ],
//     '2024-07-02': [
//       { start: '10:00', end: '11:00', title: 'Event 3' },
//       { start: '10:00', end: '11:00', title: 'Event 4' },
//       { start: '10:30', end: '11:20', title: 'Event 5' },
//     ],
//     '2024-07-03': [
//       { start: '09:00', end: '10:00', title: 'Event 6' },
//       { start: '12:00', end: '13:00', title: 'Event 7' },
//     ],
//   };

//   const timeScrollViewRef = useRef<ScrollView>(null);
//   const eventScrollViewRefs = useRef<Array<ScrollView | null>>([]);

//   const handleCellPress = (date: string, time: string) => {
//     console.log(`Cell Pressed: Date: ${date}, Time: ${time}`);
//     Alert.alert('Cell Pressed', `Date: ${date}, Time: ${time}`);
//   };

//   const handleEventPress = (event: Event) => {
//     console.log(`Event Pressed: Title: ${event.title}, Start: ${event.start}, End: ${event.end}`);
//     Alert.alert('Event Pressed', `Title: ${event.title}, Start: ${event.start}, End: ${event.end}`);
//   };

//   const onVerticalScroll = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
//     const offsetY = e.nativeEvent.contentOffset.y;
//     if (timeScrollViewRef.current) {
//       timeScrollViewRef.current.scrollTo({ y: offsetY, animated: false });
//     }
//     eventScrollViewRefs.current.forEach(ref => {
//       if (ref) {
//         ref.scrollTo({ y: offsetY, animated: false });
//       }
//     });
//   };

//   const renderTimeline = () => {
//     return (
//       <ScrollView horizontal>
//         <View style={styles.timelineContainer}>
//           <ScrollView
//             style={styles.timeColumn}
//             contentContainerStyle={{ flexGrow: 1 }}
//             ref={timeScrollViewRef}
//             onScroll={onVerticalScroll}
//             scrollEventThrottle={16}
//           >
//             <View style={styles.headerPlaceholder} />
//             {timeSlots.map((time) => (
//               <View key={time} style={styles.timeSlot}>
//                 <Text>{time}</Text>
//               </View>
//             ))}
//           </ScrollView>
//           <ScrollView horizontal style={styles.eventColumn} contentContainerStyle={{ flexDirection: 'row' }}>
//             {selectedDates.map((date, index) => (
//               <View key={date} style={styles.dayColumnWrapper}>
//                 <View style={styles.header}>
//                   <Text style={styles.headerText}>{moment(date).format('dd')[0].toUpperCase()}</Text>
//                   <Text style={styles.dateText}>{moment(date).format('D')}</Text>
//                 </View>
//                 <ScrollView
//                   ref={ref => (eventScrollViewRefs.current[index] = ref)}
//                   contentContainerStyle={styles.eventsContainer}
//                   onScroll={onVerticalScroll}
//                   scrollEventThrottle={16}
//                 >
//                   <View style={styles.dayColumn}>
//                     {timeSlots.map((time) => {
//                       const hasEvent = dummyEvents[date]?.some(event => {
//                         const start = moment(event.start, 'HH:mm');
//                         const end = moment(event.end, 'HH:mm');
//                         const timeMoment = moment(time, 'HH:mm');
//                         return timeMoment.isBetween(start, end, 'minute', '[)');
//                       });

//                       if (hasEvent) {
//                         return (
//                           <View key={time} style={styles.timeSlot} />
//                         );
//                       } else {
//                         return (
//                           <TouchableOpacity key={time} style={styles.timeSlot} onPress={() => handleCellPress(date, time)} />
//                         );
//                       }
//                     })}
//                     {dummyEvents[date]?.map((event, eventIndex) => {
//                       const start = moment(event.start, 'HH:mm');
//                       const end = moment(event.end, 'HH:mm');
//                       const top = start.hour() * 60 + start.minute();
//                       const height = end.diff(start, 'minutes');

//                       const overlappingEvents = dummyEvents[date]?.filter(e => {
//                         const eStart = moment(e.start, 'HH:mm');
//                         const eEnd = moment(e.end, 'HH:mm');
//                         return (start.isBefore(eEnd) && end.isAfter(eStart));
//                       }) || [];

//                       const eventWidth = (screenWidth / 3 - 20) / overlappingEvents.length;
//                       const eventLeft = eventWidth * overlappingEvents.findIndex(e => e === event);

//                       return (
//                         <TouchableOpacity
//                           key={eventIndex}
//                           style={[
//                             styles.event,
//                             {
//                               top,
//                               height,
//                               width: eventWidth,
//                               left: eventLeft,
//                             },
//                           ]}
//                           onPress={() => handleEventPress(event)}
//                         >
//                           <Text style={styles.eventText}>{event.title}</Text>
//                         </TouchableOpacity>
//                       );
//                     })}
//                   </View>
//                 </ScrollView>
//               </View>
//             ))}
//           </ScrollView>
//         </View>
//       </ScrollView>
//     );
//   };

//   return (
//     <SafeAreaView style={styles.container}>
//       <View style={styles.timelineWrapper}>
//         {renderTimeline()}
//       </View>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: 'white',
//   },
//   scrollContainer: {
//     flex: 1,
//   },
//   timelineWrapper: {
//     flex: 1,
//     padding: 10,
//   },
//   timelineContainer: {
//     flexDirection: 'row',
//     flex: 1,
//   },
//   timeColumn: {
//     width: 50,
//     borderRightWidth: 1,
//     borderRightColor: '#ddd',
//   },
//   headerPlaceholder: {
//     height: 70,
//     borderBottomWidth: 1,
//     borderBottomColor: '#ddd',
//   },
//   timeSlot: {
//     height: 70,
//     justifyContent: 'center',
//     borderBottomWidth: 1,
//     borderBottomColor: '#ddd',
//   },
//   eventColumn: {
//     flexDirection: 'row',
//     flex: 1,
//   },
//   dayColumnWrapper: {
//     width: screenWidth / 3,
//     borderLeftWidth: 1,
//     borderLeftColor: '#ddd',
//   },
//   header: {
//     alignItems: 'center',
//     borderBottomWidth: 1,
//     borderBottomColor: '#ddd',
//     paddingVertical: 16.5,
//   },
//   headerText: {
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
//   dateText: {
//     fontSize: 14,
//   },
//   eventsContainer: {
//     // height: 1440, // 24 hours * 60 minutes
//   },
//   dayColumn: {
//     position: 'relative',
//     // height: 1440, // 24 hours * 60 minutes
//   },
//   event: {
//     position: 'absolute',
//     backgroundColor: 'lightblue',
//     borderRadius: 5,
//     padding: 5,
//     zIndex: 1,
//     borderWidth: 1,
//     borderColor: 'blue',
//   },
//   eventText: {
//     fontSize: 12,
//   },
// });

// export default App;


// using react-native-calenders timeLine

