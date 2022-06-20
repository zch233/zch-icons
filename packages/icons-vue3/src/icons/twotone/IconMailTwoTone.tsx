// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import MailTwoToneSvg from 'icon-base/es/asn/MailTwoTone';

export interface MailTwoToneIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconMailTwoTone: MailTwoToneIconType = (props, context) => <Icon name='MailTwoTone' {...{ ...props, ...context.attrs }} icon={MailTwoToneSvg} />;

IconMailTwoTone.displayName = 'IconMailTwoTone';

export default IconMailTwoTone;
