import React from 'react';
import Chart from 'react-apexcharts';

// Sample Data (replace with your actual data source)
const data = {
  months: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  subjects: ['Math', 'Science', 'History', 'English'],
  years: ['Year 1', 'Year 2', 'Year 3'],
  grades: { 'A': 35, 'B': 45, 'C': 15, 'D': 5 }, // Percentage distribution
  skills: ['Theory', 'Practical', 'Project'],
  attendanceData: [85, 88, 86, 90, 92, 89],
  marksData: [82, 78, 91, 75],
  scatterData: [ // [Attendance %, Average Mark %]
    [95, 88], [80, 75], [92, 90], [70, 60], [85, 80], [98, 95]
  ],
  yearlyData: [
    { name: 'Semester 1', data: [75, 78, 80] },
    { name: 'Semester 2', data: [80, 85, 90] },
  ]
};

const StudentDashboard = () => {

  // 1. Attendance Trend – Line Chart
  const attendanceTrend = {
    series: [{ name: 'Attendance (%)', data: data.attendanceData }],
    options: {
      chart: { type: 'line', toolbar: { show: false } },
      title: { text: 'Monthly Attendance Trend', align: 'left' },
      xaxis: { categories: data.months, title: { text: 'Month' } },
      colors: ['#007BFF'],
      stroke: { curve: 'smooth' }
    }
  };

  // 2. Subject Marks – Bar Chart
  const subjectMarks = {
    series: [{ name: 'Avg Marks (%)', data: data.marksData }],
    options: {
      chart: { type: 'bar', toolbar: { show: false } },
      title: { text: 'Average Marks by Subject', align: 'left' },
      xaxis: { categories: data.subjects },
      colors: ['#28A745'],
      plotOptions: { bar: { distributed: true } }
    }
  };

  // 3. Grade Distribution – Pie Chart
  const gradeDistribution = {
    series: Object.values(data.grades),
    options: {
      chart: { type: 'pie' },
      title: { text: 'Grade Distribution', align: 'left' },
      labels: Object.keys(data.grades),
      colors: ['#FFC107', '#17A2B8', '#DC3545', '#6C757D']
    }
  };

  // 4. Attendance vs Marks – Scatter Plot
  const attendanceMarks = {
    series: [{ name: 'Student', data: data.scatterData }],
    options: {
      chart: { type: 'scatter', toolbar: { show: false } },
      title: { text: 'Attendance vs. Average Marks (Correlation)', align: 'left' },
      xaxis: { tickAmount: 10, title: { text: 'Attendance (%)' } },
      yaxis: { tickAmount: 10, title: { text: 'Average Marks (%)' } },
      colors: ['#FD7E14']
    }
  };

  // 5. Skill Strengths – Radar Chart
  const skillStrengths = {
    series: [{ name: 'Skill Score', data: [85, 70, 95] }], 
    options: {
      chart: { type: 'radar' },
      title: { text: 'Skill Strengths Balance', align: 'left' },
      xaxis: { categories: data.skills },
      yaxis: { tickAmount: 5, min: 0, max: 100 },
      colors: ['#6F42C1']
    }
  };
  const yearlyProgress = {
    series: data.yearlyData,
    options: {
      chart: { type: 'bar', stacked: true, toolbar: { show: false } },
      title: { text: 'Yearly Progress by Semester', align: 'left' },
      xaxis: { categories: data.years, title: { text: 'Academic Year' } },
      yaxis: { title: { text: 'Average Mark (%)' } },
      colors: ['#20C997', '#E83E8C'],
      plotOptions: { bar: { horizontal: false } }
    }
  };

  return (
    <div style={{ padding: '20px', backgroundColor: '#f9f9f9' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '30px', color: '#333' }}>Student Performance Dashboard</h1>

      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}>
        {/* Row 1: Trends and Distribution */}
        <div style={{ width: '45%', minWidth: '350px', margin: '10px', backgroundColor: '#fff', boxShadow: '0 2px 5px rgba(0,0,0,0.1)', borderRadius: '8px' }}>
          <Chart options={attendanceTrend.options} series={attendanceTrend.series} type="line" height={300} />
        </div>
        <div style={{ width: '45%', minWidth: '350px', margin: '10px', backgroundColor: '#fff', boxShadow: '0 2px 5px rgba(0,0,0,0.1)', borderRadius: '8px' }}>
          <Chart options={subjectMarks.options} series={subjectMarks.series} type="bar" height={300} />
        </div>

        {/* Row 2: Composition and Correlation */}
        <div style={{ width: '45%', minWidth: '350px', margin: '10px', backgroundColor: '#fff', boxShadow: '0 2px 5px rgba(0,0,0,0.1)', borderRadius: '8px' }}>
          <Chart options={gradeDistribution.options} series={gradeDistribution.series} type="pie" height={300} />
        </div>
        <div style={{ width: '45%', minWidth: '350px', margin: '10px', backgroundColor: '#fff', boxShadow: '0 2px 5px rgba(0,0,0,0.1)', borderRadius: '8px' }}>
          <Chart options={attendanceMarks.options} series={attendanceMarks.series} type="scatter" height={300} />
        </div>

        {/* Row 3: Skills and Progress */}
        <div style={{ width: '45%', minWidth: '350px', margin: '10px', backgroundColor: '#fff', boxShadow: '0 2px 5px rgba(0,0,0,0.1)', borderRadius: '8px' }}>
          <Chart options={skillStrengths.options} series={skillStrengths.series} type="radar" height={300} />
        </div>
        <div style={{ width: '45%', minWidth: '350px', margin: '10px', backgroundColor: '#fff', boxShadow: '0 2px 5px rgba(0,0,0,0.1)', borderRadius: '8px' }}>
          <Chart options={yearlyProgress.options} series={yearlyProgress.series} type="bar" height={300} />
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;