// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import IeSquareFilledSvg from 'gupo-icons-base/es/asn/IeSquareFilled';

export interface IeSquareFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconIeSquareFilled: IeSquareFilledIconType = (props, context) => (
    <Icon name='IeSquareFilled' {...{ ...props, ...context.attrs }} icon={IeSquareFilledSvg} />
);

IconIeSquareFilled.displayName = 'IconIeSquareFilled';
IconIeSquareFilled.theme = 'filled';
IconIeSquareFilled.originName = 'ie-square';

export default IconIeSquareFilled;
