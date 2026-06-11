import { Box, useTheme, Typography, List, ListItem, ListItemText } from "@mui/material";
import Header from "../../components/Header";
import { tokens } from "../../theme";
import { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import { formatDate } from "@fullcalendar/core";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import listPlugin from "@fullcalendar/list";

const Calendar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [currentEvents, setCurrentEvents] = useState([]);

  return (
    <Box sx={{
    }}>
      {/* 标题区 */}
      <Header title="Calendar" description="Full Calendar Interactive Page" />
      {/* 核心内容区 */}
      <Box sx={{
        display: "flex",
        mt: "20px",
        p: "20px",
        gap: "10px",
        alignItems: "stretch",
        justifyContent: "space-between"
      }}>
        {/* 左侧任务栏 */}
        <Box sx={{
          backgroundColor: colors.primary[400],
          flex: "1 1 20%",
          height: "70vh"
        }}>
          {/* 标题 */}
          <Typography
            variant="h4"
            sx={{
              color: colors.grey[100],
              p: "5px 10px 10px 5px"
            }}>
            Events
          </Typography>
          <List sx={{
            maxHeight: "calc(70vh - 44px)",
            overflowY: "auto"
          }}>
            {currentEvents.map((event => {
              return (
                <ListItem
                  key={event.id}
                  sx={{
                    p: "5px",
                    backgroundColor: colors.greenAccent[600],
                    borderRadius: "5px"
                  }}>
                  <ListItemText
                    primary={event.title}
                    secondary={formatDate(event.start, {
                      year: "numeric",
                      month: "short",
                      day: "numeric"
                    })}
                  />
                </ListItem>
              )
            }))}
          </List>
        </Box>

        {/* 右侧日记部分 */}
        <Box sx={{
          flex: "1 1 100%"
        }}>
          <FullCalendar
            height="70vh"
            plugins={[
              dayGridPlugin,
              timeGridPlugin,
              interactionPlugin,
              listPlugin,
            ]}
            initialView="dayGridMonth"
            headerToolbar={{
              left: "prev,next today",
              center: "title",
              right: "dayGridMonth,timeGridWeek,timeGridDay,listMonth",
            }}
            editable={true}
            selectMirror={true}
            dayMaxEvents={true}
            selectable={true}
            select={handleDateClick}
            eventClick={handleEventClick}
            eventsSet={events => setCurrentEvents(events)}
          />

        </Box>
      </Box>
    </Box>
  )

  // 点击后添加事件
  function handleDateClick(selected) {
    // selected为选中的时间段
    const title = prompt("请输入本次事件的标题");
    const calendarApi = selected.view.calendar;
    calendarApi.unselect()

    if (title) {
      calendarApi.addEvent({
        id: `${selected.dateStr}-${title}`,
        title: title,
        start: selected.startStr,
        end: selected.endStr,
        allDay: selected.allDay
      })
    }
  }

  // 点击后确认删除事件
  function handleEventClick(selected) {
    if (window.confirm("你确定要删除这个事件吗")) {
      selected.event.remove();
    }
  }
}

export default Calendar;