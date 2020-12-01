import React, { memo } from "react";
import styled from "styled-components";

interface Props {
  className?: string;
}
const indexComponent: React.FC<Props> = memo(({ className }) => {
  return (
    <AppTitle className={className}>
      <h1>タイトルだよ</h1>
    </AppTitle>
  );
});

const AppTitle = styled.div``;

export default indexComponent;
