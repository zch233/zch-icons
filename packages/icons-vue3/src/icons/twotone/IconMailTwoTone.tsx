// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import MailTwotoneSvg from 'icons-base/es/asn/MailTwotone';

export interface MailTwotoneIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconMailTwotone: MailTwotoneIconType = (props, context) => <Icon name='MailTwotone' {...{ ...props, ...context.attrs }} icon={MailTwotoneSvg} />;

IconMailTwotone.displayName = 'IconMailTwotone';
IconMailTwotone.theme = 'twotone';
IconMailTwotone.originName = 'mail';

export default IconMailTwotone;
