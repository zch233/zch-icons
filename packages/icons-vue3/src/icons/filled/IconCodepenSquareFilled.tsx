// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import CodepenSquareFilledSvg from 'icons-base/es/asn/CodepenSquareFilled';

export interface CodepenSquareFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconCodepenSquareFilled: CodepenSquareFilledIconType = (props, context) => (
    <Icon name='CodepenSquareFilled' {...{ ...props, ...context.attrs }} icon={CodepenSquareFilledSvg} />
);

IconCodepenSquareFilled.displayName = 'IconCodepenSquareFilled';
IconCodepenSquareFilled.theme = 'filled';
IconCodepenSquareFilled.originName = 'codepen-square';

export default IconCodepenSquareFilled;
