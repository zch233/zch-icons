// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import FileTwotoneSvg from 'gupo-icons-base/es/asn/FileTwotone';

export interface FileTwotoneIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconFileTwotone: FileTwotoneIconType = (props, context) => <Icon name='FileTwotone' {...{ ...props, ...context.attrs }} icon={FileTwotoneSvg} />;

IconFileTwotone.displayName = 'IconFileTwotone';
IconFileTwotone.theme = 'twotone';
IconFileTwotone.originName = 'file';

export default IconFileTwotone;
