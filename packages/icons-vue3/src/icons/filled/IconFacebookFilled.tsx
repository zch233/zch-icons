// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import FacebookFilledSvg from 'icon-base/es/asn/FacebookFilled';

export interface FacebookFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconFacebookFilled: FacebookFilledIconType = (props, context) => (
    <Icon name='FacebookFilled' {...{ ...props, ...context.attrs }} icon={FacebookFilledSvg} />
);

IconFacebookFilled.displayName = 'IconFacebookFilled';

export default IconFacebookFilled;
