import React from 'react';
import DashboardSearchBar from '../components/DashboardSearchBar';
import Header from '../components/Header';
import TaskList from '../components/TaskList';


const TaskPage: React.FC = () => {
    return ( 
        <>
            <DashboardSearchBar />
            <Header />
            <TaskList />
        </>
     );
}
 
export default TaskPage;