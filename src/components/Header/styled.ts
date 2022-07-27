import BaseLogo from '@src/assets/logo.svg';
import LinkWithSearch from '@src/components/LinkWithSearch';
import styled from 'styled-components';

export const Logo = styled(BaseLogo)`
  @media (max-width: ${({ theme }): string => theme.breakpoints.m}) {
    display: none;
  }
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 76px;
  border-bottom: 1px solid black;
  padding: 0 ${({ theme }): string => theme.spacing(5)};
  color: ${({ theme }) => theme.palette.error};
`;

export const InfoWrapper = styled.div`
  display: flex;

  @media (max-width: ${({ theme }): string => theme.breakpoints.m}) {
    order: 2;
    width: 100%;
    justify-content: space-between;
  };
`;

export const InfoLink = styled(LinkWithSearch)`
  display: flex;
  align-items: center;
  text-transform: uppercase;
  text-decoration: none;
  color: ${({ theme }): string => theme.palette.grey[60]};
  font-family: ${({ theme }): string => theme.typography.fontFamily.primary};
  font-weight: ${({ theme }): string => theme.typography.fontWeight[600]};
  font-size: 16px;

  @media (max-width: ${({ theme }): string => theme.breakpoints.m}) {
    order: 2;
  }
`;

export const DeviceId = styled.h2`
  display: flex;
  align-items: center;
  margin-left: ${({ theme }): string => theme.spacing(7)};
  font-family: ${({ theme }): string => theme.typography.fontFamily.primary};
  font-weight: ${({ theme }): string => theme.typography.fontWeight[600]};
  font-size: 22px;
  color: ${({ theme }): string => theme.palette.primary[90]};

  @media (max-width: ${({ theme }): string => theme.breakpoints.m}) {
    font-size: 18px;
    margin-left: ${({ theme }): string => theme.spacing()};
    order: 1;
  }
`;

export const Loading = styled.span`
  margin: ${({ theme }): string => theme.spacing(3)};
`;
