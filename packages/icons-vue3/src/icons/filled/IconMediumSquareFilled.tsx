// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import MediumSquareFilledSvg from 'icon-base/es/asn/MediumSquareFilled';

export interface MediumSquareFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconMediumSquareFilled: MediumSquareFilledIconType = (props, context) => (
    <Icon name='MediumSquareFilled' {...{ ...props, ...context.attrs }} icon={MediumSquareFilledSvg} />
);

IconMediumSquareFilled.displayName = 'IconMediumSquareFilled';

export default IconMediumSquareFilled;
