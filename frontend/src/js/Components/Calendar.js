export default function Activities() {
    return `
        <h2 id="calheader">Activity Planner</h2>
        <div id="calwrap">
            <div id="year"></div>
            <div id="month"></div>
            <div id="monthAndYear"></div>
            <div id="calbtns">
                <button id="calendar-prev">Previous</button>
                <button id="calendar-next">Next</button>
            </div>
            <div id="calendar-body">Body</div>
            <div id="calendar-daySchedule"></div>
        </div>
    `
}