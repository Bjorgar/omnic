import LinkWithSearch from '@src/components/LinkWithSearch';
import styled from 'styled-components';

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
`;

export const DeviceId = styled.h2`
  margin-left: ${({ theme }): string => theme.spacing(7)};
  font-family: ${({ theme }): string => theme.typography.fontFamily.primary};
  font-weight: ${({ theme }): string => theme.typography.fontWeight[600]};
  font-size: 22px;
  color: ${({ theme }): string => theme.palette.primary[90]};
`;
