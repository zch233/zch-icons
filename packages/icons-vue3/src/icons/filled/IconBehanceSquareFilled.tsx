// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import BehanceSquareFilledSvg from 'icons-base/es/asn/BehanceSquareFilled';

export interface BehanceSquareFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconBehanceSquareFilled: BehanceSquareFilledIconType = (props, context) => (
    <Icon name='BehanceSquareFilled' {...{ ...props, ...context.attrs }} icon={BehanceSquareFilledSvg} />
);

IconBehanceSquareFilled.displayName = 'IconBehanceSquareFilled';
IconBehanceSquareFilled.theme = 'filled';
IconBehanceSquareFilled.originName = 'behance-square';

export default IconBehanceSquareFilled;
