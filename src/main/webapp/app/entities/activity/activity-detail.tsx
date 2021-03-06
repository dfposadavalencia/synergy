import React from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
// tslint:disable-next-line:no-unused-variable
import { Translate, ICrudGetAction, TextFormat } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IRootState } from 'app/shared/reducers';
import { getEntity } from './activity.reducer';
import { IActivity } from 'app/shared/model/activity.model';
// tslint:disable-next-line:no-unused-variable
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';

export interface IActivityDetailProps extends StateProps, DispatchProps, RouteComponentProps<{ id: string }> {}

export class ActivityDetail extends React.Component<IActivityDetailProps> {
  componentDidMount() {
    this.props.getEntity(this.props.match.params.id);
  }

  render() {
    const { activityEntity } = this.props;
    return (
      <Row>
        <Col md="8">
          <h2>
            <Translate contentKey="synergyApp.activity.detail.title">Activity</Translate> [<b>{activityEntity.id}</b>]
          </h2>
          <dl className="jh-entity-details">
            <dt>
              <span id="name">
                <Translate contentKey="synergyApp.activity.name">Name</Translate>
              </span>
            </dt>
            <dd>{activityEntity.name}</dd>
            <dt>
              <span id="place">
                <Translate contentKey="synergyApp.activity.place">Place</Translate>
              </span>
            </dt>
            <dd>{activityEntity.place}</dd>
            <dt>
              <span id="startDate">
                <Translate contentKey="synergyApp.activity.startDate">Start Date</Translate>
              </span>
            </dt>
            <dd>
              <TextFormat value={activityEntity.startDate} type="date" format={APP_DATE_FORMAT} />
            </dd>
            <dt>
              <span id="endDate">
                <Translate contentKey="synergyApp.activity.endDate">End Date</Translate>
              </span>
            </dt>
            <dd>
              <TextFormat value={activityEntity.endDate} type="date" format={APP_DATE_FORMAT} />
            </dd>
            <dt>
              <span id="points">
                <Translate contentKey="synergyApp.activity.points">Points</Translate>
              </span>
            </dt>
            <dd>{activityEntity.points}</dd>
            <dt>
              <span id="status">
                <Translate contentKey="synergyApp.activity.status">Status</Translate>
              </span>
            </dt>
            <dd>{activityEntity.status}</dd>
            <dt>
              <Translate contentKey="synergyApp.activity.challenge">Challenge</Translate>
            </dt>
            <dd>{activityEntity.challenge ? activityEntity.challenge.id : ''}</dd>
            <dt>
              <Translate contentKey="synergyApp.activity.userProfile">User Profile</Translate>
            </dt>
            <dd>{activityEntity.userProfile ? activityEntity.userProfile.id : ''}</dd>
            <dt>
              <Translate contentKey="synergyApp.activity.tag">Tag</Translate>
            </dt>
            <dd>
              {activityEntity.tags
                ? activityEntity.tags.map((val, i) => (
                    <span key={val.id}>
                      <a>{val.id}</a>
                      {i === activityEntity.tags.length - 1 ? '' : ', '}
                    </span>
                  ))
                : null}
            </dd>
            <dt>
              <Translate contentKey="synergyApp.activity.agenda">Agenda</Translate>
            </dt>
            <dd>{activityEntity.agenda ? activityEntity.agenda.id : ''}</dd>
          </dl>
          <Button tag={Link} to="/entity/activity" replace color="info">
            <FontAwesomeIcon icon="arrow-left" />{' '}
            <span className="d-none d-md-inline">
              <Translate contentKey="entity.action.back">Back</Translate>
            </span>
          </Button>
          &nbsp;
          <Button tag={Link} to={`/entity/activity/${activityEntity.id}/edit`} replace color="primary">
            <FontAwesomeIcon icon="pencil-alt" />{' '}
            <span className="d-none d-md-inline">
              <Translate contentKey="entity.action.edit">Edit</Translate>
            </span>
          </Button>
        </Col>
      </Row>
    );
  }
}

const mapStateToProps = ({ activity }: IRootState) => ({
  activityEntity: activity.entity
});

const mapDispatchToProps = { getEntity };

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ActivityDetail);
