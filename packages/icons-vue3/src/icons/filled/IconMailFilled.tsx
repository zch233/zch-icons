// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import MailFilledSvg from 'icon-base/es/asn/MailFilled';

export interface MailFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconMailFilled: MailFilledIconType = (props, context) => <Icon name='MailFilled' {...{ ...props, ...context.attrs }} icon={MailFilledSvg} />;

IconMailFilled.displayName = 'IconMailFilled';

export default IconMailFilled;
