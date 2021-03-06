import React from 'react';
import MenuItem from 'app/shared/layout/menus/menu-item';
import { DropdownItem } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Translate, translate } from 'react-jhipster';
import { NavLink as Link } from 'react-router-dom';
import { NavDropdown } from './menu-components';

export const EntitiesMenu = props => (
  // tslint:disable-next-line:jsx-self-close
  <NavDropdown icon="th-list" name="Options" id="entity-menu">
    <MenuItem icon="arrow-alt-right" to="/entity/user-profile">
      <Translate contentKey="global.menu.entities.userProfile" />
    </MenuItem>
    <MenuItem icon="arrow-alt-right" to="/entity/user-season">
      <Translate contentKey="global.menu.entities.userSeason" />
    </MenuItem>
    <MenuItem icon="arrow-alt-right" to="/entity/season">
      <Translate contentKey="global.menu.entities.season" />
    </MenuItem>
    <MenuItem icon="arrow-alt-right" to="/entity/challenge">
      <Translate contentKey="global.menu.entities.challenge" />
    </MenuItem>
    <MenuItem icon="arrow-alt-right" to="/entity/activity">
      <Translate contentKey="global.menu.entities.activity" />
    </MenuItem>
    <MenuItem icon="arrow-alt-right" to="/entity/tag">
      <Translate contentKey="global.menu.entities.tag" />
    </MenuItem>
    <MenuItem icon="arrow-alt-right" to="/entity/field">
      <Translate contentKey="global.menu.entities.field" />
    </MenuItem>
    <MenuItem icon="arrow-alt-right" to="/entity/agenda">
      <Translate contentKey="global.menu.entities.agenda" />
    </MenuItem>
    {/* jhipster-needle-add-entity-to-menu - JHipster will add entities to the menu here */}
  </NavDropdown>
);
