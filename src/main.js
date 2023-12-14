import SortPresenter from './presenter/sort-presenter.js';
import FilterPresenter from './presenter/filter-presenter.js';
import PointsListPresenter from './presenter/points-list-presenter.js';

const tripEventsNode = document.querySelector('.trip-events');
const filterNode = document.querySelector('.trip-controls__filters');

const sortPresenter = new SortPresenter({ sortContainer: tripEventsNode });
const filterPresenter = new FilterPresenter({ filterContainer: filterNode });
const pointListPresenter = new PointsListPresenter({ pointsListContainer: tripEventsNode });

filterPresenter.init();
sortPresenter.init();
pointListPresenter.initPointList();

