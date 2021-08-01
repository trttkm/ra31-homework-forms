import { Route, Switch, withRouter } from 'react-router-dom';
import { HexToRgb } from '../components/HexToRgb/HexToRgb';
import { OlympicForm } from '../components/OlympicForm/OlympicForm';
import { PhotoManager } from '../components/PhotoManager/PhotoManager';
import { TeacherDashboard } from '../components/TeacherDashboard/TeacherDashboard';
import { WalksList } from '../components/WalksList/WalksList';

const AppRouter = () => {
  return (
    <Switch>
      <Route path="/teacher-dashboard" component={TeacherDashboard} />
      <Route path="/olympic-form" component={OlympicForm} />
      <Route path="/hex-to-rgb" component={HexToRgb} />
      <Route path="/walks-list" component={WalksList} />
      <Route path="/photo-manager" component={PhotoManager} />
    </Switch>
  );
};

export default withRouter(AppRouter);
