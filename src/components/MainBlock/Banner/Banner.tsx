import React from 'react';
import styled from "styled-components";

export const Banner = () => {
    return (
        <StyledBanner>
            <StyledBannerContent>
                <StyledAva>
                    <StyledAvaImg
                        src="https://media.licdn.com/dms/image/C4D03AQGulInLYMHQKg/profile-displayphoto-shrink_400_400/0/1649411282010?e=1694649600&v=beta&t=XIS1Fk25t5CvfSuvUeewGDdGEuuycKaQF8nrvHazQN0"/>
                </StyledAva>

                <StyledStats>
                    <StyledStatsTitle>Bohdan Boberskyi</StyledStatsTitle>
                    <StyledStatsSubtitle>Poland, Rzeszów</StyledStatsSubtitle>
                    <StyledStatsSocial></StyledStatsSocial>
                </StyledStats>
            </StyledBannerContent>
        </StyledBanner>
    );
};

const StyledBanner = styled.section`
  width: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 8px;
  padding: 180px 35px 35px 50px;
  position: relative;
  margin-bottom: 30px;
  background-image: url(https://www.radiustheme.com/demo/wordpress/themes/cirkle/wp-content/uploads/buddypress/members/1/cover-image/60b0724fc9a1a-bp-cover-image.jpg);

  &:before {
    content: "";
    height: 100%;
    width: 100%;
    background-image: linear-gradient(to top, rgba(0, 0, 0, .9), transparent);
    border-radius: 8px;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 0;
  }
`
const StyledBannerContent = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
`
const StyledAva = styled.a`
  position: relative;
  border-radius: 50%;
  background-color: #fff;
  padding: 5px;
  display: inline-flex;
  width: 125px;

  &:after {
    content: url(https://www.radiustheme.com/demo/wordpress/themes/cirkle/wp-content/themes/cirkle/assets/img/round_shape1.png);
    position: absolute;
    top: -9px;
    left: -8px;
  }
`
const StyledAvaImg = styled.img`
  border-radius: 50%;
  max-width: 100%;
`
const StyledStats = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`
const StyledStatsTitle = styled.h2`
  display: flex;
  font-size: 26px;
  font-weight: 700;
  line-height: 24px;
  margin-bottom: 2px;
  position: relative;
  color: #fff;
`
const StyledStatsSubtitle = styled.p`
  font-size: 14px;
  max-width: 550px;
  line-height: 28px;
  color: #fff;
  margin-bottom: 10px;
`
const StyledStatsSocial = styled.div`

`
