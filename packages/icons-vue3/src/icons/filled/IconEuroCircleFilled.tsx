// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import EuroCircleFilledSvg from 'icons-base/es/asn/EuroCircleFilled';

export interface EuroCircleFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconEuroCircleFilled: EuroCircleFilledIconType = (props, context) => (
    <Icon name='EuroCircleFilled' {...{ ...props, ...context.attrs }} icon={EuroCircleFilledSvg} />
);

IconEuroCircleFilled.displayName = 'IconEuroCircleFilled';
IconEuroCircleFilled.theme = 'filled';
IconEuroCircleFilled.originName = 'euro-circle';

export default IconEuroCircleFilled;
