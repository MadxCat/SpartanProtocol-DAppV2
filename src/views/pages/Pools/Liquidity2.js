import React, { useState } from 'react'

import {
  Col,
  Nav,
  NavItem,
  NavLink,
  Row,
  TabContent,
  TabPane,
} from 'reactstrap'

import classnames from 'classnames'
import AddLiquidity from './AddLiquidity'
import RemoveLiquidity from './RemoveLiquidity'
import ZapLiquidity from './ZapLiquidity'
import BondLiquidity from './BondLiquidity'

const Liquidity2 = () => {
  const [activeTab, setActiveTab] = useState('1')

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab)
  }

  return (
    <>
      <div className="content">
        <Row className="card-body justify-content-center">
          <Col xs="6" xl="5">
            <h2 className="d-inline text-title ml-1">Liquidity</h2>
          </Col>
          <Col xs="6" xl="4" />
        </Row>

        <Row className="justify-content-center">
          <Col xs="12" xl="9">
            <Row>
              <Col md={9}>
                <Nav tabs className="nav-tabs-custom">
                  <NavItem>
                    <NavLink
                      className={classnames({ active: activeTab === '1' })}
                      onClick={() => {
                        toggle('1')
                      }}
                    >
                      <span className="d-none d-sm-block">Add</span>
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className={classnames({ active: activeTab === '2' })}
                      onClick={() => {
                        toggle('2')
                      }}
                    >
                      <span className="d-none d-sm-block">Remove</span>
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className={classnames({ active: activeTab === '3' })}
                      onClick={() => {
                        toggle('3')
                      }}
                    >
                      <span className="d-none d-sm-block">Zap</span>
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className={classnames({ active: activeTab === '4' })}
                      onClick={() => {
                        toggle('4')
                      }}
                    >
                      <span className="d-none d-sm-block">Bond</span>
                    </NavLink>
                  </NavItem>
                </Nav>
              </Col>
            </Row>
            <TabContent activeTab={activeTab}>
              <TabPane tabId="1" className="p-3">
                <AddLiquidity />
              </TabPane>
              <TabPane tabId="2" className="p-3">
                <RemoveLiquidity />
              </TabPane>
              <TabPane tabId="3" className="p-3">
                <ZapLiquidity />
              </TabPane>
              <TabPane tabId="4" className="p-3">
                <BondLiquidity />
              </TabPane>
            </TabContent>
          </Col>
        </Row>
      </div>
    </>
  )
}

export default Liquidity2
