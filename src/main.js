import SortPresenter from './presenter/sort-presenter.js';
import FilterPresenter from './presenter/filter-presenter.js';
import FormViewPresenter from './presenter/form-presenter.js';
import PointsListPresenter from './presenter/points-list-presenter.js';
import EditFormViewPresenter from './presenter/edit-form-presenter.js';


const tripEventsNode = document.querySelector('.trip-events');
const filterNode = document.querySelector('.trip-controls__filters');

const sortPresenter = new SortPresenter({ sortContainer: tripEventsNode });
const formPresenter = new FormViewPresenter({ formContainer: tripEventsNode });
const filterPresenter = new FilterPresenter({ filterContainer: filterNode });
const pointListPresenter = new PointsListPresenter({ pointsListContainer: tripEventsNode });
const editFormViewPresenter = new EditFormViewPresenter({ editFormContainer: tripEventsNode })

filterPresenter.init();
sortPresenter.init();
formPresenter.init();
editFormViewPresenter.init();
pointListPresenter.initPointList();
for (let i = 0; i < 3; i++) {
  pointListPresenter.initPoint();
}





