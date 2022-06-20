// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import FileTwoToneSvg from 'icon-base/es/asn/FileTwoTone';

export interface FileTwoToneIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconFileTwoTone: FileTwoToneIconType = (props, context) => <Icon name='FileTwoTone' {...{ ...props, ...context.attrs }} icon={FileTwoToneSvg} />;

IconFileTwoTone.displayName = 'IconFileTwoTone';

export default IconFileTwoTone;
