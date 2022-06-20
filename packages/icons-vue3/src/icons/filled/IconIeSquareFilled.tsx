// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import IeSquareFilledSvg from 'icon-base/es/asn/IeSquareFilled';

export interface IeSquareFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconIeSquareFilled: IeSquareFilledIconType = (props, context) => (
    <Icon name='IeSquareFilled' {...{ ...props, ...context.attrs }} icon={IeSquareFilledSvg} />
);

IconIeSquareFilled.displayName = 'IconIeSquareFilled';

export default IconIeSquareFilled;
