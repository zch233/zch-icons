// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import BehanceSquareFilledSvg from 'icon-base/es/asn/BehanceSquareFilled';

export interface BehanceSquareFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconBehanceSquareFilled: BehanceSquareFilledIconType = (props, context) => (
    <Icon name='BehanceSquareFilled' {...{ ...props, ...context.attrs }} icon={BehanceSquareFilledSvg} />
);

IconBehanceSquareFilled.displayName = 'IconBehanceSquareFilled';

export default IconBehanceSquareFilled;
