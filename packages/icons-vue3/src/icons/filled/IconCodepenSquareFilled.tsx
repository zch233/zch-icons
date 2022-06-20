// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import CodepenSquareFilledSvg from 'icon-base/es/asn/CodepenSquareFilled';

export interface CodepenSquareFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconCodepenSquareFilled: CodepenSquareFilledIconType = (props, context) => (
    <Icon name='CodepenSquareFilled' {...{ ...props, ...context.attrs }} icon={CodepenSquareFilledSvg} />
);

IconCodepenSquareFilled.displayName = 'IconCodepenSquareFilled';

export default IconCodepenSquareFilled;
