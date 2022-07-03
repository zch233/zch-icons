// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import AliwangwangFilledSvg from 'icons-base/es/asn/AliwangwangFilled';

export interface AliwangwangFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconAliwangwangFilled: AliwangwangFilledIconType = (props, context) => (
    <Icon name='AliwangwangFilled' {...{ ...props, ...context.attrs }} icon={AliwangwangFilledSvg} />
);

IconAliwangwangFilled.displayName = 'IconAliwangwangFilled';
IconAliwangwangFilled.theme = 'filled';
IconAliwangwangFilled.originName = 'aliwangwang';

export default IconAliwangwangFilled;
